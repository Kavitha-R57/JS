var a = 15, b=20, c
switch(c){
    case 1:{
        c=a+b;
        console.log('c');
        break;
    }
    case 2:{
        c=a-b;
        console.log(c);
        break;
    }
    case 3: {
        c=a*b;
        console.log(c);
        break;
    }
    case 4:{
        c=a/b;
        console.log(c);
        break;
    }
    default:{
        console.log('default value')
    }
}
   