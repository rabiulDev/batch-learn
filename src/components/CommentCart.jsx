//classrooms/23/classroom-reply-comment-create/

import React from "react";
import { Avatar, Comment, Input, Form } from "antd";
import { useParams } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { useDispatch, useSelector } from "react-redux";
import {addNewReplyComment} from "../app/features/comments"

const CommentCart = ({ children, result, show, setShow }) => {
    const dispatch = useDispatch()
  const { id } = useParams();
  const { fetchData } = useAuth();
  const REPLYCOMMENT_URL = `classrooms/${id}/classroom-reply-comment-create/`;
  const [form] = Form.useForm();
  const {account} = useSelector(
    (state) => state.accout
  );

  const handleReplyCommentButton = ({ reply_message }) => {
    fetchData
      .post(REPLYCOMMENT_URL, {
        comment: reply_message,
        parent_comment: result.id,
        creator: account.id,
      })                                                 
      .then((res) => {
        dispatch(addNewReplyComment(res?.data));
      })
      .catch((err) => {
        console.log(err);
      });
    form.resetFields();
  };
  return (
    <Comment
      actions={[
        <span
          key="comment-nested-reply-to"
          className="font-semibold font-nunito text-[12px]"
        >
          {show === result.id ? (
            <span onClick={() => setShow(null)}>Hide</span>
          ) : (
            <span onClick={() => setShow(result.id)}>Reply to</span>
          )}
        </span>,
      ]}
      author={
        <a className="!text-black font-semibold font-nunito">
          {result.creator_first_name} {result.creator_last_name}
        </a>
      }
      avatar={<Avatar src={result.avatar} alt="Profile Image" />}
      content={
        <p className="p-0 text-[14px] font-medium font-nunito text-gray-400">
          {result.comment}
        </p>
      }
    >
      <div className={show === result.id ? "block" : "hidden"}>
        {children}

        <Form
          form={form}
          onFinish={handleReplyCommentButton}
          name="reply_comment"
          className="comment__input"
        >
          <Form.Item name="reply_message" className="!m-0 w-full">
            <Input placeholder="Your comment here..." type="text" />
          </Form.Item>

          <Form.Item className="!m-0">
            <button type="submit">
              <svg
                id="Capa_1"
                enableBackground="new 0 0 404.644 404.644"
                height="28"
                viewBox="0 0 404.644 404.644"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="m5.535 386.177c-3.325 15.279 8.406 21.747 19.291 16.867l367.885-188.638h.037c4.388-2.475 6.936-6.935 6.936-12.08 0-5.148-2.548-9.611-6.936-12.085h-.037l-367.885-188.641c-10.885-4.881-22.616 1.589-19.291 16.869.225 1.035 21.974 97.914 33.799 150.603l192.042 33.253-192.042 33.249c-11.825 52.686-33.575 149.567-33.799 150.603z"
                    fill="#3F8CFE"
                  ></path>
                </g>
              </svg>
            </button>
          </Form.Item>
        </Form>
      </div>
    </Comment>
  );
};

export default CommentCart;
