import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";
import { todoRemainingSelector } from "../../redux/selectors";

export default function TodoList() {
  const todoList = useSelector(todoRemainingSelector);

  const dispatch = useDispatch();

  const [todo, setTodo] = useState();
  const [priority, setPriority] = useState('Medium');

  const inputTodoRef = useRef();

  const handleChangeInputTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleChangeSelectPriority = (value) => {
    console.log(value);
    setPriority(value)
  }

  const handleAddTodo = () => {
    dispatch(
      addTodo({ id: uuidv4(), name: todo, priority: priority, completed: false })
    );
    setTodo('');
    setPriority('Medium');
    inputTodoRef.current.focus();
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (<Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed}/>))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input ref={inputTodoRef} value={todo} onChange={handleChangeInputTodo} />
          <Select defaultValue="Medium" value={priority} onChange={handleChangeSelectPriority}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
