import React from 'react';
import { MoneyNumberStyle } from '../style-components';
import { numberOutput, numberProps } from './utils';

type moneyNumberProps = {
    value: string;
    onChange: (amount: string) => void;
    onOk: () => void;
}
const MoneyNumber: React.FC<moneyNumberProps> = (props) => {
    const output = props.value;
    const setOutput = (output: string) => {
        let value = '0' ;
        if (output.length > 16) {
            value = output.slice(0, 16);
        } else if (output.length === 0) {
            value = '0';
        } else {
            value = output;
        }
        props.onChange(value)
    }

    const onClickNumber = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        console.log(text)
        if ( text === null) {return;}
        if (text === 'ok') {
            if (props.onOk) {
                props.onOk();
            }
            return;
        }
        setOutput(numberOutput(text as numberProps, output))
    }

    return (
        <MoneyNumberStyle>
            <div className='output'>
                { output }
            </div>
            <div className='pad clearfix' onClick={onClickNumber}>
                <button>
                   <i>1</i>
                </button>
                <button>
                   <i>2</i>
                </button>
                <button>
                   <i>3</i>
                </button>
                <button>
                    <i>删除</i>
                </button>
                <button>
                   <i>4</i>
                </button>
                <button>
                   <i>5</i>
                </button>
                <button>
                   <i>6</i>
                </button>
                <button>
                    <i>清空</i>
                </button>
                <button>
                   <i>7</i>
                </button>
                <button>
                   <i>8</i>
                </button>
                <button>
                   <i>9</i>
                </button>
                <button>
                    <i>ok</i>
                </button>
                <button></button>
                <button>
                    <i>0</i>
                </button>
                <button>
                    <i>.</i>
                </button>
                {/* <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className='ok'>OK</button>
                <button className='zero'>0</button>
                <button>.</button> */}
            </div>
        </MoneyNumberStyle>
    )
}

export default MoneyNumber;