import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function TeacherField() {

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  const [Name, setName] = useState(null)
  const [Country, setCountry] = useState(null)
  const [Address, setAddress] = useState(null)
  const [Date, setDate] = useState(null)
  const [Gender, setGender] = useState(null)
  const [Status, setStatus] = useState(null)
  const [Email, setEmail] = useState(null)
  const [Phone, setPhone] = useState(null)
  const [Qism, setQism] = useState(null)
  const [Daragah, setDaragah] = useState(null)
  const [Poster, setPoster] = useState(null)
  const [CV, setCV] = useState(null)

  const url = import.meta.env.VITE_URL
  const nav = useNavigate()

  useEffect(() => {

    if (document.querySelector('.names').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Name])

  const submitHaiah = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')

    let forms = new FormData()

    forms.append('name', Name)
    forms.append('country', Country)
    forms.append('address', Address)
    forms.append('birth', Date)
    forms.append('gender', Gender || document.querySelector('.gender').value)
    forms.append('status', Status || document.querySelector('.status').value)
    forms.append('email', Email)
    forms.append('phone', Phone)
    forms.append('specialization', Qism || document.querySelector('.qisms').value)
    forms.append('position', Daragah || document.querySelector('.darajah').value)
    forms.append('poster', Poster)
    forms.append('cv', CV)

    return await fetch(`${url}/haiah/`, {
      method: 'POST',
      body: forms
    })
      .then(r => r.json())
      .then(j => {
        if (j.sts == 'failed') {
          setError(j.msg)
          setCommited(true)
          setErrored(true)
          document.body.classList.remove('cursor-wait')
          document.body.classList.add('cursor-default')
        }

        if (j.sts == 'success') {
          setError(j.msg)
          setCommited(true)
          setErrored(true)
          document.body.classList.remove('cursor-wait')
          document.body.classList.add('cursor-default')
          nav('/')
        }
      }).catch(j => {
        document.body.classList.remove('cursor-wait')
        document.body.classList.add('cursor-default')
        setError('Error!.')
        setCommited(true)
        setErrored(true)
      })
  }

  return (
    <>
      <h1 className="text-center mb-6 mt-2 text-xl font-bold">?????????? ???????????? ??????????????????</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 my-4 rounded-lg text-[#222222] dark:text-slate-100 flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-yellow-600 hover:text-yellow-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <div>
        <div className="flex md:flex-row-reverse justify-around items-center md:gap-8 flex-col">
          <div className="w-full">
            <label htmlFor="namehai" className="my-2 block font-bold text-yellow-600">: ??????????</label>
            <input required type="text" onChange={(e) => setName(e.target.value)} id="namehai" placeholder="??????????" className="names text-end bg-transparent py-1 pr-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
          </div>
          <div className="w-full">
            <label htmlFor="country" className="my-2 block font-bold text-yellow-600">: ????????????</label>
            <input required type="text" onChange={(e) => setCountry(e.target.value)} id="country" placeholder="????????????" className="text-end bg-transparent py-1 pr-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
          </div>
        </div>
        <div className="flex md:flex-row-reverse justify-around items-center md:gap-8 flex-col">
          <div className="w-full">
            <label htmlFor="address" className="my-2 block font-bold text-yellow-600">: ??????????????</label>
            <input required type="text" onChange={(e) => setAddress(e.target.value)} id="address" placeholder="??????????????" className="text-end bg-transparent py-1 pr-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
          </div>
          <div className="w-full">
            <label htmlFor="birth" className="my-2 block font-bold text-yellow-600">: ?????????? ??????????????</label>
            <input required type="date" onChange={(e) => setDate(e.target.value)} id="birth" className="text-end bg-transparent py-1 pr-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
          </div>
        </div>
        <div className="flex md:flex-row-reverse justify-around items-center md:gap-8 flex-col">
          <div className="w-full">
            <label htmlFor="emailhai" className="my-2 block font-bold text-yellow-600">: ???????????? ????????????????????</label>
            <input required type="text" onChange={(e) => setEmail(e.target.value)} id="emailhai" placeholder="???????????? ????????????????????" className="text-end bg-transparent py-1 pr-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
          </div>
          <div className="w-full">
            <label htmlFor="phone" className="my-2 block font-bold text-yellow-600">: ????????????</label>
            <input required type="number" onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="????????????" className="text-end bg-transparent py-1 pr-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
          </div>
        </div>
        <div className="flex md:flex-row-reverse justify-around items-center md:gap-8 flex-col">
          <div className="w-full">
            <label htmlFor="status" className="my-2 block font-bold text-yellow-600">: ???????? ????????????????</label>
            <select required type="text" id="status" onChange={(e) => setStatus(e.target.value)} className="status bg-transparent p-3 rounded-lg  border text-end outline-none border-yellow-600 w-[100%]" >
              <option value="??????????">??????????</option>
              <option value="????????">????????</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="gender" className="my-2 block font-bold text-yellow-600">: ??????</label>
            <select required type="text" id="gender" onChange={(e) => setGender(e.target.value)} className="gender bg-transparent p-3 rounded-lg  border text-end outline-none border-yellow-600 w-[100%]" >
              <option value="??????">??????</option>
              <option value="????????">????????</option>
            </select>
          </div>
        </div>
        <div className="flex md:flex-row-reverse justify-around items-center md:gap-8 flex-col">
          <div className="w-full">
            <label htmlFor="qism" className="my-2 block font-bold text-yellow-600">: ?????? ????????????</label>
            <select required type="text" id="qism" onChange={(e) => setQism(e.target.value)} className="qisms bg-transparent p-3 rounded-lg  border text-end outline-none border-yellow-600 w-[100%]" >
              <option value="ameed">???????? ????????????</option>
              <option value="naibameed">???????? ????????????</option>
              <option value="musajil">???????? ????????????</option>
              <option value="qismdakwah">?????? ???????????? ??????????????</option>
              <option value="qismhadith">?????? ?????????? ?????????? ????????????</option>
              <option value="qismakidah">?????? ?????????????? ???????????? ????????????????</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="daragah" className="my-2 block font-bold text-yellow-600">: ???????????? ??????????????</label>
            <select required type="text" id="daragah" onChange={(e) => setDaragah(e.target.value)} className="darajah bg-transparent p-3 rounded-lg  border text-end outline-none border-yellow-600 w-[100%]" >
              <option value="ustaz">??????????</option>
              <option value="musharik">??????????</option>
              <option value="muhadir">??????????</option>
              <option value="musaid">??????????</option>
              <option value="mutadarib">??????????</option>
            </select>
          </div>
        </div>
        <div className="flex md:flex-row-reverse justify-around items-center md:gap-8 flex-col">
          <div className="w-full">
            <label htmlFor="posting" className="my-2 block font-bold text-yellow-600">: ????????????</label>
            <input required onChange={(e) => setPoster(e.target.files[0])} type="file" id="posting" className="posimg bg-transparent py-1 pl-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
          </div>
          <div className="w-full">
            <label htmlFor="postfile" className="my-2 block font-bold text-yellow-600">: ???????????? ??????????????</label>
            <input required onChange={(e) => setCV(e.target.files[0])} type="file" id="postfile" className="postfile bg-transparent py-1 pl-3 rounded-lg  border outline-none border-yellow-600 w-[100%]" />
          </div>
        </div>
        {
          (Poster != null) && <img src={URL.createObjectURL(Poster)} alt="blog" className="mt-4 w-full" />
        }
        <div className="my-5">
          {
            (Commited == false) ? <p className="bblog cursor-not-allowed text-center bg-yellow-800 text-slate-400 py-1 pl-3 rounded-lg font-bold w-[100%]">?????????? ????????????????</p> : <p className="cursor-pointer text-center bg-yellow-600 text-white py-1 pl-3 rounded-lg hover:bg-yellow-700 font-bold w-[100%]" onClick={() => submitHaiah()}>?????????? ????????????????</p>
          }
        </div>
      </div>
    </>
  )
}

export default TeacherField