import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {
  PageWrapStyle,
  ConWrapStyle,
  PostCardUlCont,
  CommentContainerStyle,
} from './PostStyle';
import PostCard from '../../../components/PostCard/PostCard';
import Comment from '../../../components/Comment/Comment';
import CommentInput from '../../../components/CommentInput/CommentInput';
import Header from '../../../components/Header/Header';
import Loading from '../../Loading/Loading';
import getAPI from '../../../api/getAPI';

export default function Post() {
  const auth = JSON.parse(localStorage.getItem('auth'));
  const { id } = useParams();
  const [postData, setPostData] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [commentsList, setCommentsList] = useState('');

  useEffect(() => {
    const GetPost = async () => {
      try {
        const res = await getAPI(`/post/${id}`);
        const { post } = res;
        setPostData(post);
        const { author } = res.post;
        setPostAuthor(author);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    GetPost();
  }, [auth, id]);

  const postCommentList = useCallback(async () => {
    try {
      const res = await getAPI(`/post/${id}/comments`);
      const commentData = res.comments;
      setCommentsList(commentData);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  }, [id]);

  useEffect(() => {
    postCommentList();
  }, [postCommentList]);

  if (!postData) return <Loading />;
  else {
    return (
      <PageWrapStyle>
        <Header id={id} />
        <ConWrapStyle>
          <PostCardUlCont>
            <PostCard post={postData} author={postAuthor} />
          </PostCardUlCont>
          <CommentContainerStyle>
            {commentsList ? (
              commentsList
                .map((comment) => (
                  <Comment
                    key={comment.id}
                    comment={comment}
                    postId={id}
                    deleteComment={postCommentList}
                  />
                ))
                .reverse()
            ) : (
              <p>첫번째 댓글을 달아보세요!</p>
            )}
          </CommentContainerStyle>
        </ConWrapStyle>
        <CommentInput upDateComment={postCommentList} />
      </PageWrapStyle>
    );
  }
}
