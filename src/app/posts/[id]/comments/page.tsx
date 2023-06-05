import React from 'react'

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}


type Props = {
  params: { id: string }
}

const getComments = async (id: string) => {
  // await new Promise(resolve => setTimeout(resolve, 3000))
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  const data: Comment[] = await response.json()
  return data
}

const Post = async ({ params }: Props) => {

  const { id } = params
  const comments = await getComments(id)

  return (
    <div className="py-10">
      {
        comments.map(({id, name, body}) =>
          <li key={id} className="block h-full mb-6 p-4 rounded-lg bg-gray-300">
            <h4 className="text-sm font-bold pb-4">{name}</h4>
            <small className="text-xs">{body}</small>
          </li>
        )
      }
    </div>
  )
}

export default Post