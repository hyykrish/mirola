interface userIDProps {
    params:{
        userId:string;
    }
}

const Page = ({params}:userIDProps) => {
    return(
        <div>
            User is :{params.userId}
        </div>
    )
}

export default Page