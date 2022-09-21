import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system'
import './SinglePost.css'
import { useParams } from "react-router-dom"
import { useFetchDocument } from '../../hooks/useFetchDocument'

const SinglePost = () => {
    const { id } = useParams()
    const { document: post, loading } = useFetchDocument("posts", id)

  return (
    <div className='post-container'>
        {loading && <p>Carregando post...</p>}
        {post && (
            <div className='post-container'>
                <Grid container md={9}>
                    <Grid item>
                        <Typography variant='h2' fontWeight={400} className='title-post'>{post.title}</Typography>
                        <img src={post.urlImage} alt={post.title} />
                        <p>{post.content}</p>
                        <h3 className='tags-title'>Este post trata sobre: </h3>
                        <Box className='tags-container'>
                            {post.tagsArray.map((tag) => (
                                <p key={tag} className="tags"><span className='span-tags'>#</span>{tag}</p>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </div>
        )}
    </div>
  )
}

export default SinglePost