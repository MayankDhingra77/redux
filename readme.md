# Why do we need react redux
- jo bhi data hum use kar rhe jis chij ko hmari app maintain kar rhi hai usse hum state kha dete hai 
- sending props from parent to child to child is called prop drilling
- store is a place where all states are reservedf

# somw terms in redux are 
- action , reducer , slice , store, state
action is a object that contains event and some additional info , additional info includes payload event is the action 
- slice - har ek feature ki state ko maintain karne ka feature slice me hota hai -initial state and reducer functions are written over here 
example - user slice , contains data of user , cart slice - add to car , remove from cart 
reducer - jha pe entire function likha hota hai update ya delete vgara karne ka 
store - store is the singal source of truth where our state is managed 


- ceate store 
- wrap in main.jsx with provide
- create slice 
- register in store