import { useState, useEffect } from "react";
import rock from '../assets/images/rock.jpg';
import scissor from '../assets/images/scissor.jpg';
import paper from '../assets/images/paper.jpg';
import { makeStyles } from '@material-ui/core/styles';

const buttonStyle = {
    padding: '10px',
    background: 'skyblue'    
}

const array = [
    {
        value: 'scissor',
        image: scissor
    }, 
    {
        value: 'rock',
        image: rock
    },
    {
        value: 'paper',
        image: paper
    } 
]; // 이미지 및 구분값
const useStyles = makeStyles((theme) => ({
    btnContainer: {
      '& > button': {
        margin: theme.spacing(1),
        padding: '1rem'
      },
    },
}));

const RockScissorPaper = () => {
    const classes = useStyles();
    const [enemy, setEnemy] = useState<any>();
    const [isRunning, setIsRunning] = useState(false);
    const [result, setResult] = useState('');

    useEffect(() => {
        let interval: any = null;
        if(isRunning) {
            let count = 0;
            interval = setInterval(() => {
                count += 1;
                const index = count % 3;
                setEnemy(array[index]);
            }, 100)
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const onStart = () => {
        setResult('');
        setIsRunning(true);
    }

    const handleClick = (e: any) => {
        setIsRunning(false);
        const value = e.target.value;

        if(value === enemy.value) {
            setResult('Draw!');
            return;
        }

        switch(value) {
            case 'scissor':
                if(enemy.value === 'rock') {
                    setResult('You Lose!');
                } else {
                    setResult('You Win!');
                }
                break;
            case 'rock':
                if(enemy.value === 'paper') {
                    setResult('You Lose!');
                } else {
                    setResult('You Win!');
                }
                break;
            case 'paper':
                if(enemy.value === 'scissor') {
                    setResult('You Lose!');
                } else {
                    setResult('You Win!');
                }
                break;
            default:
                break;
        }
    }

    return (
        <div style={{ textAlign: 'center'}}>
            {
                enemy ? <img src={ enemy.image } /> : <h2>가위바위보 게임!</h2>
            }
            <div className={classes.btnContainer}>
            {
                !isRunning ?
                    <button onClick={onStart} style={buttonStyle}>게임시작</button> :
                    <>
                        <button value="scissor" onClick={handleClick}>가위</button>
                        <button value="rock" onClick={handleClick}>바위</button>
                        <button value="paper" onClick={handleClick}>보</button>
                    </>
            }
            </div>
            <p>{result}</p> 
        </div>
    )
}

export default RockScissorPaper;