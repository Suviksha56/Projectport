import vr from './Video/project1.mp4'
export function Upload(){
    return(
        <div>
            <video controls autoplay height={"500px"} width={"700px"} >
                <source src={vr} />
            </video>
        </div>
    )
}