import { useState } from 'react';
import { Modal, List, Select } from 'antd';

const ModalSelect = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

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

  const onItemSelect = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <>
      <Select
        value={selectedItem}
        onClick={showModal}
        style={{ width: 200 }}
        open={false}
        placeholder="Select item"
      />
      <Modal
        title="Selectable List"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
      >
        <List
          style={{ height: 300, overflow: 'auto' }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              onClick={() => onItemSelect(item)}
              style={{ 
                cursor: 'pointer',
                backgroundColor: selectedItem === item ? '#f0f0f0' : 'transparent'
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
};

export default ModalSelect;