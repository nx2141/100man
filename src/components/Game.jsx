import React, { useState, useEffect } from "react";
import Car from "./Car";
import Obstacle from "./Obstacle";
import ControlButton from "./ControlButton";
import Counter from "./Counter";

const Game = () => {
  const [carYPosition, setCarYPosition] = useState(5); // 車のY軸位置（10分割の中央を初期値とする）
  const [obstacles, setObstacles] = useState([]); // 障害物の配列
  const [distance, setDistance] = useState(0); // 距離カウンター
  const [gameOver, setGameOver] = useState(false); // ゲームオーバーのフラグ

  useEffect(() => {
    const obstacleInterval = setInterval(() => {
      // 新しい障害物の追加
      const newObstacleYPos = Math.floor(Math.random() * 10); // 0から9までのランダムな位置
      const newObstacle = {
        yPosition: newObstacleYPos,
        key: new Date().getTime(),
      };
      setObstacles((prevObstacles) => [...prevObstacles, newObstacle]);

      // 障害物の削除ロジック（実際には適切な条件に置き換える必要があります）
      setObstacles((prevObstacles) => prevObstacles.filter((obstacle) => true)); // すべての障害物を保持
    }, 2000); // 2秒ごとに障害物を生成

    return () => clearInterval(obstacleInterval);
  }, []);

  useEffect(() => {
    if (obstacles.some((obstacle) => obstacle.yPosition === carYPosition)) {
      setGameOver(true); // 車と障害物の位置が一致した場合、ゲームオーバー
    }
  }, [obstacles, carYPosition]); // 障害物と車の位置が更新されるたびにチェック

  const moveCar = (direction) => {
    setCarYPosition((prevPosition) => {
      // Y軸の位置を計算
      let newPosition = prevPosition;
      if (direction === "up") {
        // 'up'ボタンが押された場合、車を上に移動（Y軸の位置を減少）
        newPosition = Math.max(prevPosition - 1, 0); // 位置が0未満にならないように制限
      } else if (direction === "down") {
        // 'down'ボタンが押された場合、車を下に移動（Y軸の位置を増加）
        newPosition = Math.min(prevPosition + 1, 9); // 位置が9を超えないように制限
      }
      return newPosition; // 新しい位置を返す
    });
  };

  return (
    <div>
      <Counter distance={distance} />
      <Car yPosition={carYPosition} />
      {obstacles.map((obstacle, index) => (
        <Obstacle key={index} yPosition={obstacle.yPosition} />
      ))}
      <ControlButton direction="up" onClick={() => moveCar("up")} />
      <ControlButton direction="down" onClick={() => moveCar("down")} />
      {gameOver && <div>ゲームオーバー！リトライ？</div>}
    </div>
  );
};

export default Game;
