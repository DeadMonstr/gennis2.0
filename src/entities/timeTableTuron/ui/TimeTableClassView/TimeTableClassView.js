import React, {useState} from 'react';
import {Droppable} from "shared/ui/droppable";


import cls from "./TimeTableClassView.module.sass"

import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";


export const TimeTableClassView = (props) => {

    const {lessons,hours} = props


    const renderContainers = (containers) => {


        // return containers.map(item => {
        //
        //     return (
        //         <Container
        //             item={item}
        //         />
        //     )
        // })
    }
    const [scale, setScale] = useState()

    function handleScaleChange(event) {
        setScale(event.instance.transformState.scale);
    }

    console.log(lessons)
    return (
        <div
            className={cls.fullscreen}
        >

            <TransformWrapper
                onTransformed={(e) => handleScaleChange(e)}
                initialScale={1}
                // pinch={{number: 5}}
                doubleClick={{disabled: true}}
                // centerOnInit={true}
                minScale={0.2}
                maxScale={5}
                panning={{
                    activationKeys: [],
                    excluded: [],
                }}
                pinch={{
                    excluded: []
                }}
            >

                <div className={cls.wrapper}>
                    <TransformComponent >

                        <div className={cls.header}>
                            {
                                hours.map(item => {
                                    return (
                                        <div className={cls.item}>
                                            <span style={{transform: `scale(${1 / scale})`}}>
                                                {item.start_time}-{item.end_time}
                                            </span>

                                        </div>
                                    )
                                })
                            }
                        </div>


                        <div className={cls.footer}>
                            {
                                lessons.map(item => {
                                    return (
                                        <div className={cls.rooms}>
                                            <div className={cls.room}>
                                                <span style={{transform: `scale(${1 / scale})`}}>
                                                    {item.name}
                                                </span>
                                            </div>
                                            <div className={cls.containers}>
                                                {renderContainers(item.lessons)}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>


                    </TransformComponent>
                </div>
            </TransformWrapper>


        </div>
    );
};


// const Container = (props) => {
//
//
//     const {item} = props
//
//
//     return (
//         <div
//             className={cls.droppableContainer}
//         >
//
//             {
//                 !!item.group.name &&
//                 <DraggableContainer canChange={false}  item={item}/>
//             }
//
//         </div>
//     )
// }



