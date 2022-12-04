## 💻 Local Installation

Run the tippers platform on development.

- Make sure you have [Node](https://nodejs.org/en/download/) & [Git](https://git-scm.com/downloads) downloaded

* git clone repository

```
  $ git clone https://github.com/Samuellyworld/Tippers.git
```

- create a `.env` file in the `smart-contracts` directory and add the following 

```
NEXT_PUBLIC_ALCHEMY_KEY="ENTER ALCHEMY API KEY"
NEXT_PUBLIC_COIN_CONTRACT_ADDRESS="0xEd35035c67d41e39f6112D1BeD5A0F94DA311D68"
NEXT_PUBLIC_DICE_CONTRACT_ADDRESS="0xCd9deE10EeCf230D50Bb0d9a6a14dD6ec754EB3e"
NEXT_PUBLIC_WHEEL_CONTRACT_ADDRESS="0x8e9d001B6D5ee4C013803ed69691E16fDa25227D"
```

- install dependencies 
```
 $ npm install
```
- Start the tippers platform on development

```
 $ npm run dev
```

## 🪪 License.
Copyright Tippers 2022 [**MIT LICENSE**](https://github.com/Samuellyworld/Tippers/blob/main/LICENSE)
