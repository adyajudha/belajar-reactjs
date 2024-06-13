import { memo } from "react";
function ChildComponent(props) {
    console.log(`Child Component Rendered`)
    return (<>
        <h3>YouTube Channel {props.name}</h3>
    </>)
}

export default memo(ChildComponent)