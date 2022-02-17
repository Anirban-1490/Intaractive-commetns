
import React from "react"
import "./main.css"





export function Main()
{

    const [value , isValue] = React.useState([]);
    const commentBox = React.useRef();


    const submitComment =  (e)=>
    {

        isValue((prev)=>[...prev,{value: commentBox.current.value}])
       
    }
    React.useEffect(()=>
    {
        commentBox.current.value =""

    },[value])

    return <>
        <div className="container">
            <input type="text" className="comment-box" ref={commentBox} />
            <button className="main-btn" onClick={(e) => submitComment(e)}>Comment</button>

            <div className="comment-container">
                {
                    value.map(val => {
                        const { value } = val;
                        return <Child data = {value} margin ={0} color = "red" />

                    })
                }
            </div>

        </div>

    </>
}


function Child({data,margin,color})
{
    const [reply,isReply] = React.useState([]);
    const [clickReply , isClickReply] = React.useState(false);
    const replyRef = React.useRef();
    const [marginValue] = React.useState(margin)


    const replayHandler = ()=>
    {
         isClickReply(val => !val)
        const replayValue = replyRef.current.value;
        isReply(prev=>[...prev,{reply:replayValue}])
        replyRef.current.value =""   
    
    }


    return <>
        

        <div className="comment-area" style={{marginLeft:(margin*12)+"px",borderLeft:color?`5px solid ${color}`:"none"}} >
            <p>{data}</p>

            <div>
                {
                     <input type="text" name="" id="" className="reply-box" ref={replyRef} />
                }
                <button className="reply" onClick={replayHandler}>Reply</button>
            </div>
        </div>
                
        {(reply !== []) ?
            reply.map(val => {
                const {reply} = val;
                return <Child data={reply} margin = {marginValue+1}/>
            }) : ""

        }

    </>
}