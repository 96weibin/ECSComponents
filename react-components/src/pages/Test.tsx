import style from './Test.module.css'
import Button from '@mui/material/Button';
export default function Test() {

    let lis: any[] = [<>
        <div key="h1" className={style.myHeader}>---header1----</div>
    </>];
    
    lis = lis.concat(Array.from(Array(10)).map((x,i) => {
        return(<div  key={i}>
            <div>{'item' + i}</div>
        </div>)
    }));
    lis = lis.concat([<>
        <div key="h2" className={style.myHeader}>---header2----</div>
    </>])
    lis = lis.concat(Array.from(Array(10)).map((x,i) => {
        return(<div key={i + 10}>
            <div>{'item' + (i + 10)}</div>
        </div>)
    }));
    lis = lis.concat([<>
        <div key="h3" className={style.myHeader}>---header3----</div>
    </>])
    lis = lis.concat(Array.from(Array(10)).map((x,i) => {
        return(<div key={i + 20}>
            <div>{'item' + (i + 20)}</div>
        </div>)
    }));
    return (<>
        <div className={style.box}>
            {lis}
            <Button></Button>
        </div>
    </>)
}