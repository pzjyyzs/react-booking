import React from "react";
import { MoneyCategory, MoneyNote, MoneyNumber, MoneyTag, MyLayout } from "./style-components";

const Money: React.FunctionComponent = () =>  {
    return (
      <MyLayout>
        <MoneyTag>
          <ol>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
          </ol>
          <button>新增标签</button>
        </MoneyTag>

        <MoneyNote>
          <label>
            <span>备注</span>
            <input type="text" />
          </label>
        </MoneyNote>

        <MoneyCategory>
          <ul>
            <li>支出</li>
            <li>收入</li>
          </ul>
        </MoneyCategory>

        <MoneyNumber>
          <div className='output'>100</div>
          <div className='pad'>
            <button>1</button>
            <button>2</button>
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
            <button>.</button>
          </div>
        </MoneyNumber>

      </MyLayout>
    )
  }

  export default Money