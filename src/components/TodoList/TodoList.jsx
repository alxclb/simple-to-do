import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../atoms/atom";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoItemCreator } from "../TodoItemCreator/TodoItemCreator";
import { TodoListFilters } from "../TodoListFilters/TodoListFilters";
import { TodoListStats } from "../TodoListStats/TodoListStats";
import "./TodoList.scss";

export function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);
console.log(todoList)
    return (
        <section className="todo">
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />
            <div className="todo-list">
                {todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} item={todoItem} />
                ))}
            </div>
        </section>
    );
}
