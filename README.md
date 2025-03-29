# SoundPlayer ライブラリ

playSoundの管理のための 簡易的な ScriptAPI ライブラリです

[ダウンロード](https://github.com/haya-to8810/SoundPlayer/releases/download/minecraft/soundPlayer.js)

> [!NOTE]
> 質問やエラーは以下のDiscordアカウントへ
> .shoborn

## 使い方
1. アドオンをインポートし、ワールドに適応
2. ベータAPI の有効化
3. 使いたいアドオンで、ファイルを インポートする

## Example Code

[Documentation](docs/soundPlayer.md)

```javascript
import SoundPlayer from "./soundPlayer.js";

const levelupSounds = new SoundPlayer([ 
    { typeId: "random.orb" },
    { typeId: "random.orb", pitch: 1.5, delay: 5 },
    { typeId: "random.orb", pitch: 2.0, delay: 10 },
    { typeId: "random.levelup", volume: 0.5, delay: 15 },
]);
levelupSounds.play(<Player>);
```
