import { useEffect, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grid: {
        display: 'flex',
        width: 300,
        height: 300,
        flexWrap: 'wrap',
        margin: '0 auto',
    },
    box: {
        width: 100,
        height: 100,
    }
}));

const BOX_NUM = 9;

const getAnswers = () => {
    // 가로
}

const TicTacToe = () => {
    const classes = useStyles();
    const [isUser, setIsUser] = useState<boolean>(true);
    const [boxes, setBoxes] = useState<string[]>([]);
    const [winner, setWinner] = useState<string>('');
    const [answers, setAnswers] = useState<string[]>([]);

    useEffect(() => {
        for (let i = 0; i < BOX_NUM; i++) {
            setBoxes(state => ([...state, '']));
        }
        
        const width = Math.pow(BOX_NUM, 1/2);

        for(let i=0; i<width; i++) {
            let hAnswer = ""+width*i;
            let vAnswer = ""+i;
            for(let j=1; j<=width; j++) {
                hAnswer += i+j;
                vAnswer += (width*j)+i
            }
            setAnswers(state => ([...state, hAnswer]))
            setAnswers(state => ([...state, vAnswer]))
        }
        // 가로 답
    }, []);

    useEffect(() => {
        const user = [];
        const enemy = [];
        // 가로
        // 012, 345, 678

        boxes.forEach((box, index) => {
            if(box === 'user') {
                user.push(index);
            }

            if(box === 'enemy') {
                enemy.push(index);
            }
        })

        // 세로
        // 036, 147, 258

        // 대각선
        // 048, 246
    }, [boxes]);

    const handleClick = (index: number) => {
        let items = [...boxes];
        let box = items[index];
        if(box) {
            alert("이미 선택된 박스입니다.");
            return;
        }

        box = isUser ? 'user' : 'enemy';
        items[index] = box;

        setBoxes(items);
        setIsUser(!isUser);
    }

    return (
        <div>
            <h2>틱택토 게임!</h2>
            <div className={classes.grid}>
                {
                    boxes.map((box, index) => (
                        <button key={index} className={classes.box} onClick={handleClick.bind(this, index)}>
                            {
                                box === 'user' && 'O'
                            }
                            {
                                box === 'enemy' && 'X'
                            }
                        </button>
                    ))
                }
            </div>
            {
                winner && <p>{winner}</p>
            }
        </div>
    )
}

export default TicTacToe