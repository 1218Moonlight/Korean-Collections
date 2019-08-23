import React from 'react';

const styles = {
    root: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        display: 'flex',
        flexDirection: 'row',
    },
    DocRoot: {
        height: 18,
        width: 18,
        cursor: 'pointer',
        border: 0,
        background: 'none',
        padding: 0,
    },
    DocDot: {
        backgroundColor: '#e4e6e7',
        height: 12,
        width: 12,
        borderRadius: 6,
        margin: 3,
    },
    DocActive: {
        backgroundColor: '#319fd6',
    },
};

class PaginationDot extends React.Component {
    handleClick = event => {
        this.props.onClick(event, this.props.index);
    };

    render() {
        const {active} = this.props;

        let styleDot;

        if (active) {
            styleDot = Object.assign({}, styles.DocDot, styles.DocActive);
        } else {
            styleDot = styles.DocDot;
        }

        return (
            <button type="button" style={styles.DocRoot} onClick={this.handleClick}>
                <div style={styleDot}/>
            </button>
        );
    }
}

export default class Pagination extends React.Component {
    handleClick = (event, index) => {
        this.props.onChangeIndex(index);
    };

    render() {
        const {index, dots} = this.props;

        const children = [];

        for (let i = 0; i < dots; i += 1) {
            children.push(
                <PaginationDot key={i} index={i} active={i === index} onClick={this.handleClick}/>,
            );
        }

        return <div style={styles.root}>{children}</div>;
    }
}