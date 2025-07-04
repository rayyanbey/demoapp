import React from "react";
import { Segmented, Badge, List, Checkbox, Button, Typography, Empty } from "antd";
import {
  FilterOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs"; // for formatting date

const { Text } = Typography;

const Filter = ({
  todos,
  totalTodos,
  activeTodos,
  completedTodos,
  selectedFilter,
  onFilterChange,
  onToggle,
  onDelete,
}) => {
  return (
    <>
      <div className="value-boxes flex flex-row gap-4 mt-10 justify-evenly w-full md:w-3/4 lg:w-1/2 mx-auto">
        <div className="flex items-center justify-center rounded-xl bg-white shadow-lg p-6 w-[150px] h-[120px]">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-blue-600">{totalTodos}</h2>
            <p className="text-blue-400">Total</p>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl bg-white shadow-lg p-6 w-[150px] h-[120px]">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-green-600">{activeTodos}</h2>
            <p className="text-green-400">Active</p>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl bg-white shadow-lg p-6 w-[150px] h-[120px]">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-red-600">{completedTodos}</h2>
            <p className="text-red-400">Done</p>
          </div>
        </div>
      </div>

      <div className="filter-tabs mt-8 flex justify-center">
        <Segmented
          block
          size="large"
          value={selectedFilter}
          onChange={onFilterChange}
          options={[
            {
              label: (
                <div className="flex items-center gap-2">
                  <FilterOutlined />
                  <span>Total</span>
                </div>
              ),
              value: "all",
            },
            {
              label: (
                <div className="flex items-center gap-2">
                  <ClockCircleOutlined />
                  <span>Active</span>
                </div>
              ),
              value: "active",
            },
            {
              label: (
                <div className="flex items-center gap-2">
                  <CheckCircleOutlined />
                  <span>done</span>
                </div>
              ),
              value: "done",
            },
          ]}
        />
      </div>

      <div className="todo-list-container mt-10 max-w-2xl mx-auto">
        {todos.length === 0 ? (
          <Empty description="No tasks in this category" />
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={todos}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Text type="secondary" className="font-bold font-mono">
                    {dayjs(item.createdAt).format("MMM D, YYYY")}
                  </Text>,
                  <Button
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => onDelete(item.id)}
                    className="bg-red-500"
                  />,
                ]}
              >
                <Checkbox
                  checked={item.completed}
                  onChange={() => onToggle(item.id)}
                >
                  <Text delete={item.completed} className="font-bold font-mono">{item.text}</Text>
                </Checkbox>
              </List.Item>
            )}
          />
        )}
      </div>
    </>
  );
};

export default Filter;
