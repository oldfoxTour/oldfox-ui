import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createPost,
  getPosts,
  getPostById,
  likeThePost,
  postComment,
  replyToComment,
  editComment,
  deleteComment,
  editPost,
  deletePost,
  getMostVisitedPosts,
  getMostLikedPosts,
  getPostsByDestination,
  getUpcomingPosts,
} from '../services/apis';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await getPosts();
  return response.data;
});

export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (postId) => {
  const response = await getPostById(postId);
  return response.data;
});

export const addPost = createAsyncThunk('posts/addPost', async (postData) => {
  const response = await createPost(postData);
  return response.data;
});

export const likePost = createAsyncThunk('posts/likePost', async (postId) => {
  const response = await likeThePost(postId);
  return response.data;
});

export const addComment = createAsyncThunk(
  'posts/addComment',
  async ({ postId, commentData }) => {
    const response = await postComment(postId, commentData);
    return response.data;
  }
);

export const addReply = createAsyncThunk(
  'posts/addReply',
  async ({ postId, commentId, replyData }) => {
    const response = await replyToComment(postId, commentId, replyData);
    return response.data;
  }
);

export const updateComment = createAsyncThunk(
  'posts/updateComment',
  async ({ postId, commentId, updatedData }) => {
    const response = await editComment(postId, commentId, updatedData);
    return response.data;
  }
);

export const removeComment = createAsyncThunk(
  'posts/removeComment',
  async ({ postId, commentId }) => {
    await deleteComment(postId, commentId);
    return { postId, commentId };
  }
);

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ postId, updatedData }) => {
    const response = await editPost(postId, updatedData);
    return response.data;
  }
);

export const removePost = createAsyncThunk(
  'posts/removePost',
  async (postId) => {
    await deletePost(postId);
    return postId;
  }
);

export const fetchMostVisitedPosts = createAsyncThunk(
  'posts/fetchMostVisitedPosts',
  async () => {
    const response = await getMostVisitedPosts();
    return response.data;
  }
);

export const fetchMostLikedPosts = createAsyncThunk(
  'posts/fetchMostLikedPosts',
  async () => {
    const response = await getMostLikedPosts();
    return response.data;
  }
);

export const fetchPostsByDestination = createAsyncThunk(
  'posts/fetchPostsByDestination',
  async (destination) => {
    const response = await getPostsByDestination(destination);
    return response.data;
  }
);

export const fetchUpcomingPosts = createAsyncThunk(
  'posts/fetchUpcomingPosts',
  async () => {
    const response = await getUpcomingPosts();
    return response.data;
  }
);

// Slice
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [], // Ensure posts is initialized as an array
    upcomingPosts: [], // Separate state for upcoming posts
    destinationPosts: [], // Separate state for posts by destination
    loading: false,
    error: null,
    selectedPost: null, // Add selectedPost to the initial state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Posts
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = Array.isArray(action.payload.posts) ? action.payload.posts : [];
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.posts = state.posts ?? [];
      })
      // Add Post
      .addCase(addPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = [...(Array.isArray(state.posts) ? state.posts : []), action.payload];
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Remove Post
      .addCase(removePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(removePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Like Post
      .addCase(likePost.pending, (state) => {
        state.error = null;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const post = state.posts.find((p) => p.id === action.payload.id);
        if (post) {
          post.likes = action.payload.likes;
        }
      })
      .addCase(likePost.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // Fetch Most Visited Posts
      .addCase(fetchMostVisitedPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMostVisitedPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchMostVisitedPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch Most Liked Posts
      .addCase(fetchMostLikedPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMostLikedPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchMostLikedPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch Posts by Destination
      .addCase(fetchPostsByDestination.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsByDestination.fulfilled, (state, action) => {
        state.loading = false;
        state.destinationPosts = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchPostsByDestination.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.destinationPosts = state.destinationPosts ?? [];
      })
      // Fetch Upcoming Posts
      .addCase(fetchUpcomingPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUpcomingPosts.fulfilled, (state, action) => {
        console.log('Upcoming posts fetched:', action.payload); // Log the fetched data
        state.loading = false;
        console.log('Fetched upcoming posts:', action.payload); // Log the fetched data
        state.upcomingPosts = action.payload; // Update the state with the fetched data
      })
      .addCase(fetchUpcomingPosts.rejected, (state, action) => {
        console.error('Error fetching upcoming posts:', action.error); // Log the error object
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch Post by ID
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.selectedPost = action.payload;
      });
  },
});

export default postSlice.reducer;

