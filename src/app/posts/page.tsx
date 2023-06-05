import Link from 'next/link';
import React from 'react'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data: Post[] = await response.json()
  return data
}

const Posts = async () => {
  const posts = await getPosts()
  return (
    <main className="py-10 px-20">
      <h1 className="text-4xl font-bold pb-10 px-10">Posts</h1>
      <ul className="grid grid-cols-3 gap-4">
        {
          posts.map(({ id, title, body }) =>
            <li key={id}>
              <Link href={`/posts/${id}`} className="block h-full mb-10 p-10 rounded-lg bg-blue-300 hover:bg-blue-200">
                <h4 className="text-base font-bold pb-4">{title}</h4>
                <p className="text-sm">{body.slice(0, 50)}...</p>
              </Link>
            </li>
          )
        }
      </ul>
    </main>
  )
}

export default Posts