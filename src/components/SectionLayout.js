import React from 'react'
import "../styles/sectionLayout.css"

export default function SectionLayout(props) {
    return (
        <section className={props.className} id={props.id}>
            {props.content}
        </section>
    )
}
