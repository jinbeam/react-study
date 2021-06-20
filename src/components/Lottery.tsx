import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    numberContainer: {
        '& span': {
            display: 'inline-block',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginLeft: '10px',
            textAlign: 'center',
            lineHeight: '3rem',
        }
    }
}));

const Lottery = () => {
    const classes = useStyles();
    const [numbers, setNumbers] = React.useState<number[]>([]);

    const drawNumber = (i: number) => {
        const number: number = Math.floor(Math.random()*(45-1)+1);
        if(!numbers.includes(number)) {
            setNumbers(state => ([...state, number]));
            i++;
        }
        if (i<=6) {
            setTimeout(() => {drawNumber(i)}, 1000);
        }
    }
    
    const getColor = (number: number) => {
        if(number < 10) {
            return 'yellowgreen';
        } else if(number < 20) {
            return 'blueviolet'
        } else if(number < 30) {
            return 'burlywood'
        } else if(number < 40) {
            return 'hotpink'
        } else {
            return 'springgreen'
        }
    }

    return (
        <div>
            <button onClick={() => {setNumbers([]); drawNumber(0);}}>추첨 시작</button>
            <div className={classes.numberContainer}>
                <p>번호 추첨</p>
                {
                    numbers.map((number, index) => {
                        if(index === 6) {
                            return (
                                <div>
                                    <p>보너스</p>
                                    <span style={{background: 'red'}}>{number}</span>
                                </div>
                            )
                        } else {
                            return (<span style={{background: getColor(number)}}>{number}</span>)
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Lottery;