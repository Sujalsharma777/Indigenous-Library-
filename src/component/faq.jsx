import React from 'react'

const faq = () => {
  return (
    <div className='bg-base-200'><div className="collapse collapse-arrow bg-base-100 border border-base-300 ">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">Is a toilet available near the study room?</div>
  <div className="collapse-content text-md">Yes, restrooms are located close to the discussion area for easy access during study sessions.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">Is there a water purifier available?</div>
  <div className="collapse-content text-md">A purified drinking water station is provided nearby so students can refill bottles during study hours.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">Is there a separate room for lunch or eating?</div>
  <div className="collapse-content text-md">Yes, a designated lunch area is available. Eating inside the study room is restricted to maintain cleanliness.</div>
</div></div>
  )
}

export default faq