import React from 'react'
import { Helmet } from 'react-helmet'
import { FiCalendar, FiUser } from 'react-icons/fi'

const Program = () => {
  return (
    <>
      <Helmet>
        <title>Islamic Studies | خيرال</title>
      </Helmet>
      <div className='md:h-80 h-72 flex bg-stone-700 bg-opacity-50 text-white'>
        <h1 className='lg:text-5xl text-4xl text-center m-auto'>البرامج والمؤتمرات والأخبار</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto xl:w-[1200px] w-full px-4 xl:px-0 relative">
          <h2 className='px-3 py-1 absolute xl:right-0 right-4 rounded-bl-lg bg-yellow-600 w-max text-white'>البرامج والمؤتمرات والأخبار</h2>
          <div className="mx-auto lg:w-[900px] w-full text-end leading-9 py-32">
            <p className="text-end lg:text-4xl text-3xl leading-normal font-bold text-yellow-600">جاء إنشاء هذه الكلية تلبية لحاجة أباء هذه الكلية تلبية لحاجة أباء هذه الكلية تلبية لحاجة أبناء </p>
            <div className="pt-4 flex flex-row-reverse gap-6 items-center">
              <p className="flex flex-row-reverse gap-3 items-center">
                <FiCalendar />
                <span>12/01/2022</span>
              </p>
              <p className="flex flex-row-reverse gap-3 items-center">
                <FiUser />
                <span>الدراسات الإسلامية</span>
              </p>
            </div>
            <img src="/exmp.jpg" alt="photo" className='object-cover w-full my-14 h-60' />
            <p className="mb-12">
              جاء إنشاء هذه الكلية تلبية لحاجة أبناء المسلمين في مختلف بقاع العالم للتزود بسلاح العلم الشرعي، والمعارف الإسلامية، وتأهيلهم وتنمية قدراتهم لأداء دورهم للقيام بواجب الدعوة الإسلامية في بلادهم، وفق أهداف الجامعة ورسالتها، وخصوصية طلابها
            </p>
            <p className="mb-12">
              يعود تاريخ إنشاء الكلية إلى عام 1986م تحت اسم كلية الدعوة والدراسات الإسلامية، وكان ذلك تطويراً لدبلوم الدعوة في المركز الإسلامي الإفريقي، وفي أول نشأتها ارتبطت علمياً بجامعة أم درمان الإسلامية التي كانت تمنح الدرجة العلمية البكالريوس لخريجي الكلية، وبإنشاء الجامعة عام 1991م استقلت بمناهجها وبناءاتها، وأصبحت تحمل اسم  كلية الشريعة والدراسات الإسلامية
            </p>
            <p>
              ووفقاً للخطة الاستراتيجية للجامعة 2010-2020م التي وافق عليها مجلس الأمناء في دورته رقم 17 للعام 2011م، تقرر تطوير كلية الشريعة والدراسات الإسلامية إلى كليتين، وترجم ذلك إلى واقع بقرار المجلس العلمي رقم 111 سبتمبر 2012م . وتطوير قسم الدراسات الإسلامية في كلية الشريعة والدراسات الإسلامية ليصبح كلية الدراسات الإسلامية، وأنشئت وفق هذه القرارات لجنة عليا مختصةللاضطلاع بمهمة ضبط وتحديث مناهج الكلية الجديدة، ثم أقيمت ورشة علمية لتقويم عمل اللجنة، شارك فيها خبراء من جامعات عريقة في البلاد، خرجت بموجهات أكاديمية منضبطة قائمة على رؤية واضحة، ورسالة قاصدة تضطلع بها الكلية الجديدة، التي تعدّ من أهم كليات الجامعة، حيث تعني بدراسة العلوم الإسلامية لتخرج العلماء والدعاة لسد حاجات المسلمين في هذا المجال في المجتمعات المستهدفة
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Program
