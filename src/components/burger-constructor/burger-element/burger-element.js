import React from 'react';

import { useRef } from 'react'

import { useDispatch } from 'react-redux';

import { useDrop, useDrag } from 'react-dnd';

import { DEL_BURGER_ELEMENT } from '../../../services/actions/burger-element';

import {
    ConstructorElement, DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-element.module.css';

function BurgerElement(props) {


    const id = props.burgerElement._id;

    const index = props.index;

    const moveCard = props.moveCard;

    const ref = useRef(null);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch({
            type: DEL_BURGER_ELEMENT,
            id: props.burgerElement.namber,

        });
    }



    // ------------------ DnD -------useDrag-------------------

    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: () => {
            return { id, index }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });


    // ------------------ DnD -------useDrop-------------------

    const [, drop] = useDrop({
        accept: "card",
        hover(item, monitor) {


            if (!ref.current) {
                return
            }



            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const clientOffset = monitor.getClientOffset()

            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            moveCard(dragIndex, hoverIndex);

            item.index = hoverIndex


        }
    });


    drag(drop(ref))

    return (
        <div ref={ref} className={styles.wrap}>

            <DragIcon type='primary' />

            <ConstructorElement
                text={props.burgerElement.name}
                price={props.burgerElement.price}
                thumbnail={props.burgerElement.image}
                handleClose={handleClose}


            />
        </div>
    )
}

export default BurgerElement;
