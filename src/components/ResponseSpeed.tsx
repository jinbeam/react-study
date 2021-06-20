import { useState, useEffect } from 'react';

const ResponseSpeed = () => {
    const colors = ['red', 'green', 'blue', 'gray'];
    const [color, setColor] = useState<string>('');
    const [duration, setDuration] = useState(0);
    const [record, setRecord] = useState<number[]>([]);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer: any = null;
        if(isRunning) {
            timer = setInterval(() => {
                setColor(colors[Math.floor(Math.random()*4)]);
            }, Math.floor(Math.random()*3000+1000));
        }

        return () => clearInterval(timer);
    }, [isRunning]);
    
    useEffect(() => {
        if(color === 'green'){
            setIsRunning(false);
            const now = new Date();
            const timer = setInterval(() => {
                const since = new Date();
                setDuration(since.getTime() - now.getTime());
            }, 10);
            
            return () => {
                clearInterval(timer);
                setDuration(0);
            }
        }
    }, [color])


    const handleClick = () => {
        if(!color) {
            setIsRunning(true);
        } else {
            if(color !== 'green') {
                alert('실패');
                setIsRunning(false);
                setColor('');
            }
            if(color === 'green') {
                setIsRunning(false);
                setColor('');
                setRecord(state => [...state, duration])
            }
        }
    }

    const getAverage = () => {
        let sum = 0;
        record.forEach(item => sum+=item);
        return (sum / record.length).toFixed(2);
    }

    return (
        <div>
            <div style={{
                background: color || 'skyblue', 
                width: '500px', 
                height: '500px', 
                margin: '0 auto',
                textAlign: 'center',
                cursor: 'pointer'
                }} onClick={handleClick}>
                <h2>
                    { 
                        !color ? '클릭해서 시작하세요.' :
                        color !== 'green' ? '초록색이 되면 클릭하세요.' :
                        '지금 클릭'
                    }
                </h2>
            </div>
            <div style={{textAlign: 'center'}}>
                <h2>{duration} ms</h2>
                {
                    record.length > 0 &&
                    <div style={{padding: '10px', border: '1px solid #aaa'}}>
                    <h2>기록 : </h2>
                    {
                        record.map(item => <p><strong style={{color:'blue'}}>{item}</strong> ms</p>)
                    }
                    </div>
                }
                <p>평균 반응속도 : { record.length > 0 && getAverage() + ' ms' }</p>
            </div>
        </div>
    )
}

export default ResponseSpeed;
