import Ratio from 'react-bootstrap/Ratio';

function Video() {
    return (
        <div className='mb-4' style={{ width: 'auto', height: 'auto' }}>
            <Ratio aspectRatio="16x9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/i_9x8Lqwueg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Ratio>
        </div>
    )
}

export default Video
