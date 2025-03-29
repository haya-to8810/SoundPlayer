# SoundPlayer Class Documentation

## 概要

Minecraft Bedrock の ScriptAPI で playSound の管理をより、
簡易的に操作するために設計されたクラスです。

## constructor
### `constructor(sounds)`
- **sounds** `{ typeId: "soundId", pitch:? number, volume?: number, delay?: number }[]`

## Instance Methods

### `playDimension(dimension,location)`
- **dimension**　`"overworld" | "nether" | "end"`
- **location**　`Vector3`
特定のディメンションの座標に音声を再生します

### `play(player)`
特定のプレイヤーに対し座標を再生します
