import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentsData, addNewComment } from "../app/features/comments";
import { useParams } from "react-router-dom";
import useAuth from "../auth/useAuth";
import CommentCart from "./CommentCart";
import { Form, Input } from "antd";
import ReplyCommentCard from "./ReplyCommentCard";

const ClassroomComment = () => {
  const [show, setShow] = useState();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { fetchData } = useAuth();
  const { id } = useParams();
  const CREATE_COMMENT_URL = `classrooms/${id}/classroom-comment-create/`
  const URL = `classrooms/${id}/classroom-comments/?page=1&page_size=10`;
  const { isLoading, comments, results, isError } = useSelector(
    (state) => state.comments
  );
  const {account} = useSelector(
    (state) => state.accout
  );

  const handleCommentButtonClick = ({message}) => {
    fetchData.post(CREATE_COMMENT_URL, {
      comment: message,
      classroom: id,
      creator: account?.id
  }).then((res)=>{
    dispatch(addNewComment(res?.data))
  }).catch((err)=>{
    console.log(err)
  })

    form.resetFields();
  };

  useEffect(() => {
    dispatch(loadCommentsData({ fetchData, URL }));
  }, []);

  // console.log("Main", comments)
  // console.log("Reply comments", reply_comments)
  // console.log("comments", results)

  return (
    <div className="relative col-span-7 bg-white rounded-[8px] border border-gray-200 p-5">
      <div className="text-[15px] leading-[25px] text-black font-bold font-nunito">
        Classroom comments
      </div>

      <div className="h-[480px] overflow-y-scroll my-2.5">
        {comments.count ? (
          results.map((result) => (
            <CommentCart key={result.id} result={result} show={show} setShow={setShow}>
                {
                  result.reply_comments?.map((repcom)=>{
                     return <ReplyCommentCard key={repcom.id} result={repcom}/>
                  })
                }
            </CommentCart>
          ))
        ) : (
          <p className="text-center text-[#7D8DA6] text-base font-nunito font-semibold h-full flex items-center justify-center">
            No comments found!
          </p>
        )}
      </div>

      {/* COMMENT INPUT FIELD  */}

      <Form
        form={form}
        onFinish={handleCommentButtonClick}
        name="comment"
        className="comment__input"
      >
        <Form.Item name="message" className="!m-0 w-full">
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
  );
};

export default ClassroomComment;
