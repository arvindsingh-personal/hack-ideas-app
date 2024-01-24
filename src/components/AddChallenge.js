// src/components/AddChallenge.js
import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Tag } from "antd";

const AddChallenge = ({ onCancel, onAdd }) => {
  const [form] = Form.useForm();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (!0) {
      form.resetFields();
      setTags([]);
    }
  }, []);

  const onFinish = (values) => {
    onAdd({ ...values, tags });
    form.resetFields();
    onCancel();
  };

  const handleTagClose = (removedTag) => {
    const updatedTags = tags.filter((tag) => tag !== removedTag);
    setTags(updatedTags);
  };

  const handleTagAdd = () => {
    const newTag = form.getFieldValue("tag");
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      form.setFieldsValue({ tag: "" });
    }
  };

  return (
    <>
      <Modal
        open={true}
        title="Add New Challenge"
        onCancel={onCancel}
        footer={null}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Tags">
            {tags.map((tag) => (
              <Tag key={tag} closable onClose={() => handleTagClose(tag)}>
                {tag}
              </Tag>
            ))}
            <Input
              placeholder="New Tag"
              // value={form.getFieldValue("tag")}
              onChange={(e) => form.setFieldsValue({ tag: e.target.value })}
              onPressEnter={handleTagAdd}
            />
            <Button type="primary" onClick={handleTagAdd}>
              Add Tag
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Challenge
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddChallenge;
