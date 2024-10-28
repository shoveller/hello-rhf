import React, { useState } from 'react';
import { Modal, List, Checkbox, Button } from 'antd';

const ModalSelect = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  // 예시 데이터
  const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onItemSelect = (item) => {
    setSelectedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <>
      <Button onClick={showModal}>
        {selectedItems.length > 0 
          ? `Selected: ${selectedItems.join(', ')}` 
          : 'Open Modal'}
      </Button>
      <Modal
        title="Selectable List"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
      >
        <List
          style={{ height: 300, overflow: 'auto' }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Checkbox
                onChange={() => onItemSelect(item)}
                checked={selectedItems.includes(item)}
              >
                {item}
              </Checkbox>
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
};

export default ModalSelect;