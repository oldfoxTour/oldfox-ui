import Cookies from 'js-cookie';
import axios from '../axios';

export const createPost = async (postData) => {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("Token not found");
  }

  const response = await axios.post(
    "/posts/create",
    postData,
    {
      headers: { 
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};


export const getPosts = async () => {
  return await axios.get('/posts/');
};

export const getPostById = async (postId) => {
  return await axios.get(`/posts/${postId}`);
};

export const likeThePost = async (postId) => {
  return await axios.put(`/posts/${postId}/like`);
};

export const postComment = async (postId, commentData) => {
  return await axios.post(`/posts/${postId}/comment`, commentData);
};

export const replyToComment = async (postId, commentId, replyData) => {
  return await axios.post(
    `/posts/${postId}/comments/${commentId}/replies`,
    replyData
  );
};

export const editComment = async (postId, commentId, updatedData) => {
  return await axios.put(
    `/posts/${postId}/comments/${commentId}`,
    updatedData
  );
};

export const deleteComment = async (postId, commentId) => {
  return await axios.delete(`/posts/${postId}/comments/${commentId}`);
};

export const editPost = async (postId, updatedData) => {
  return await axios.put(`/posts/${postId}`, updatedData);
};

export const deletePost = async (postId) => {
  return await axios.delete(`/posts/${postId}`);
};

export const getMostVisitedPosts = async () => {
  return await axios.get('/posts/most-visited');
};

export const getMostLikedPosts = async () => {
  return await axios.get('/posts/most-liked');
};

export const getPostsByDestination = async (destination) => {
  return await axios.get(`/posts/destination/${destination}`);
};

export const getUpcomingPosts = async () => {
  return await axios.get('/posts/upcoming');
};
