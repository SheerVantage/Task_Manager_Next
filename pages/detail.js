import { useRouter } from 'next/router'
export default function Detail() {
  
    const router = useRouter()
    const { name } = router.query
  
    return (
      <div>
        <h1 className = "bg-green-200">Detail of the task </h1>
        <span className = ""> {name} </span>
      </div>
    )
  }
  