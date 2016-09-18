import React from 'react';
import Photo from './Photo';


const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {/* {this.props.posts.map((post, i) => {
                    console.log(post);
                    <Photo {...this.props} key={i} post={post} i={i} />
                }
                )} */}
                {/* <pre> */}
                    {/* {JSON.stringify(this.props.posts, null, ' ')} */}
                {/* </pre> */}
                {this.props.posts.map((post, i) =>
                    <Photo {...this.props} key={i} post={post} i={i}/>
                )}
            </div>
        )
    }
})

export default PhotoGrid;
