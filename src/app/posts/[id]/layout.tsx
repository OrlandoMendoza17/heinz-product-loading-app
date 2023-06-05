import Link from 'next/link';
import React from 'react'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type Props = {
  params: { id: string },
  children: React.ReactNode
}

const getPost = async (id: string) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data: Post = await response.json()
  return data
}

const Post = async ({ children, params }: Props) => {
  
  const { id } = params
  const post = await getPost(id)
  
  return (
    <main className="py-10 px-80">
      <article className="block h-full mb-10 p-10 rounded-lg bg-gray-100">
        <h1 className="text-4xl font-bold pb-10">{post.title}</h1>
        <p className="text-sm pb-4">{post.body}</p>
        <Link href={`posts/${id}/comments`} className="text-base text-cyan-500">
          Ver Comentarios
        </Link>
        {children}
      </article>
    </main>
  )
}

export default Post