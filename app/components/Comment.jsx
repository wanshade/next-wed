"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [author, setAuthor] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [commentsPerPage] = useState(5);

  useEffect(() => {
    fetch(`/api/comments?page=${currentPage}&limit=${commentsPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched comments data:", data);
        setComments(data.comments);
        const pages = Math.ceil(data.total / commentsPerPage);
        setTotalPages(pages);
      })
      .catch((err) => console.error(err));
  }, [currentPage, commentsPerPage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() !== "" && author.trim() !== "") {
      try {
        const response = await fetch("/api/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: newComment, author }),
        });
        const data = await response.json();
        if (response.ok) {
          setComments((prevComments) => [data, ...prevComments]);
          setNewComment("");
          setAuthor("");
          toast.success("Komentar berhasil ditambahkan!");
        } else {
          toast.error("Gagal menambahkan komentar. Coba lagi.");
        }
      } catch (err) {
        console.error(err);
        toast.error("Gagal menambahkan komentar. Coba lagi.");
      }
    } else {
      toast.error("Nama dan komentar tidak boleh kosong.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: "DELETE",
      });
      if (response.status === 204) {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.id !== id)
        );
        toast.success("Komentar berhasil dihapus!");
      } else {
        toast.error("Gagal menghapus komentar. Coba lagi.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Gagal menghapus komentar. Coba lagi.");
    }
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Ucapan & Doa</h2>

      {/* Comments List */}
      <div className="space-y-4 mb-8">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md flex items-start space-x-4 border border-gray-300"
          >
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M12 14c-4 0-6 2-6 6" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2 border-b-2 border-gray-200 pb-2">
                <p className="text-gray-800 font-semibold">{comment.author}</p>
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300"
                  aria-label="Delete comment"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18M4 6l1 14h14l1-14M10 11v6M14 11v6" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-700 mb-2">{comment.text}</p>
              <p className="text-sm text-gray-500">
                {formatDate(comment.createdAt)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-colors duration-300"
        >
          Prev
        </button>
        <span className="text-gray-700">
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-colors duration-300"
        >
          Next
        </button>
      </div>

      {/* Comment Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded-lg shadow-md border border-gray-300"
      >
        <input
          type="text"
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          placeholder="Nama kamu"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 mt-2"
          rows="4"
          placeholder="Tulis ucapan atau doa Anda di sini..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-colors duration-300"
        >
          Kirim Ucapan
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Comments;
