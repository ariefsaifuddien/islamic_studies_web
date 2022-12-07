import React from 'react'

const Profile = () => {
  return (
    <>
      <div className='h-80 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='text-5xl m-auto'>قسم العقيدة والفكر الإسلامي</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto w-[1200px] relative">
          <h2 className='px-3 py-1 absolute right-0 rounded-bl-lg bg-yellow-600 w-max text-white'>قسم العقيدة والفكر الإسلامي</h2>
          <div className="mx-auto w-[900px] text-lg text-end leading-9 py-32">
            <div className="flex gap-8 flex-row-reverse items-center">
              <img src="/exmp.jpg" alt="photo" className='object-cover w-60 mb-14 h-60' />
              <div className="flex flex-col items-end">
                <p className="mb-10 text-xl font-bold text-yellow-600">جاء إنشاء هذه الكلية تلبية لحاجة أبناء </p>
                <p className="mb-2">جاء إنشاء هذه الكلية تلبية لحاجة أبناء </p>
                <p className="mb-2">جاء إنشاء هذه الكلية تلبية لحاجة أبناء </p>
                <p className="mb-2">جاء إنشاء هذه الكلية تلبية لحاجة أبناء </p>
              </div>
            </div>
            <p>
              ووفقاً للخطة الاستراتيجية للجامعة 2010-2020م التي وافق عليها مجلس الأمناء في دورته رقم 17 للعام 2011م، تقرر تطوير كلية الشريعة والدراسات الإسلامية إلى كليتين، وترجم ذلك إلى واقع بقرار المجلس العلمي رقم 111 سبتمبر 2012م . وتطوير قسم الدراسات الإسلامية في كلية الشريعة والدراسات الإسلامية ليصبح كلية الدراسات الإسلامية، وأنشئت وفق هذه القرارات لجنة عليا مختصةللاضطلاع بمهمة ضبط وتحديث مناهج الكلية الجديدة، ثم أقيمت ورشة علمية لتقويم عمل اللجنة، شارك فيها خبراء من جامعات عريقة في البلاد، خرجت بموجهات أكاديمية منضبطة قائمة على رؤية واضحة، ورسالة قاصدة تضطلع بها الكلية الجديدة، التي تعدّ من أهم كليات الجامعة، حيث تعني بدراسة العلوم الإسلامية لتخرج العلماء والدعاة لسد حاجات المسلمين في هذا المجال في المجتمعات المستهدفة
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
