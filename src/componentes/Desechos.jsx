import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';
import axios from 'axios';

const Desechos = () => {
    const [tiposDesecho, setTiposDesecho] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMode, setModalMode] = useState('create');
    const [modalForm] = Form.useForm();

    useEffect(() => {
        fetchTiposDesecho();
    }, []);

    const fetchTiposDesecho = async () => {
        try {
            const response = await axios.get('/api/tipos-desecho'); // Reemplaza la URL con la API correcta
            setTiposDesecho(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const createTipoDesecho = async (tipoDesecho) => {
        try {
            await axios.post('/api/tipos-desecho', tipoDesecho); // Reemplaza la URL con la API correcta
            message.success('Tipo de desecho creado exitosamente');
            setModalVisible(false);
            modalForm.resetFields();
            fetchTiposDesecho();
        } catch (error) {
            console.error(error);
            message.error('Error al crear el tipo de desecho');
        }
    };

    const updateTipoDesecho = async (tipoDesecho) => {
        try {
            await axios.put(`/api/tipos-desecho/${tipoDesecho.id}`, tipoDesecho); // Reemplaza la URL con la API correcta
            message.success('Tipo de desecho actualizado exitosamente');
            setModalVisible(false);
            modalForm.resetFields();
            fetchTiposDesecho();
        } catch (error) {
            console.error(error);
            message.error('Error al actualizar el tipo de desecho');
        }
    };

    const deleteTipoDesecho = async (id) => {
        try {
            await axios.delete(`/api/tipos-desecho/${id}`); // Reemplaza la URL con la API correcta
            message.success('Tipo de desecho eliminado exitosamente');
            fetchTiposDesecho();
        } catch (error) {
            console.error(error);
            message.error('Error al eliminar el tipo de desecho');
        }
    };

    const openModal = (mode, tipoDesecho) => {
        setModalMode(mode);
        setModalVisible(true);
        if (mode === 'create') {
            modalForm.resetFields();
        } else {
            modalForm.setFieldsValue(tipoDesecho);
        }
    };

    const handleModalOk = () => {
        modalForm.validateFields().then((values) => {
            const tipoDesecho = {
                ...values,
            };
            if (modalMode === 'create') {
                createTipoDesecho(tipoDesecho);
            } else {
                updateTipoDesecho(tipoDesecho);
            }
        });
    };
    const handleModalCancel = () => {
        setModalVisible(false);
        modalForm.resetFields();
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, tipoDesecho) => (
                <div>
                    <Button onClick={() => openModal('update', tipoDesecho)}>Edit</Button>
                    <Button onClick={() => deleteTipoDesecho(tipoDesecho.id)} danger>Delete</Button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <Button type="primary" onClick={() => openModal('create')}>
                Add Tipo Desecho
            </Button>
            <Table dataSource={tiposDesecho} columns={columns} />
            <Modal
                title={modalMode === 'create' ? 'Create Tipo Desecho' : 'Update Tipo Desecho'}
                visible={modalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
            >
                <Form form={modalForm} layout="vertical">
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter the name' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: 'Please enter the description' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Desechos;