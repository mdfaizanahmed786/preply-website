import React, { useState } from "react";

interface Tutor {}

const Tutor = (props: Tutor) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex gap-5 flex-col  rounded-md shadow-lg p-5">
      <div className="font-bold">About the Author</div>
      <div className="space-y-5">
        <p>
          Hi, I am Yuki. I was born and raised in Japan but currently I live in
          the UK.
        </p>
        <p>
          I like watching and playing sports particularly basketball, football,
          volleyball and snow sports, doing yoga and walking in the countryside.
          Also I like cooking, eating, going to restaurants, watching films and
          reading books including manga!
        </p>

        {!show ? (
          <p className="text-primary text-sm cursor-pointer" onClick={() => setShow(true)}>
            Read more
          </p>
        ) : (
          <>
            <p>
              I used to work as a pharmacist in Japan, so I can also help with
              keigo (formal Japanese) and business Japanese. If you are
              interested in medical topics, I would love to talk to you!
            </p>
            <p>
              I have one years experience teaching Japanese, and I would like to
              help people who are about to start studying Japanese, those
              thinking of travelling to Japan, and those who are already
              studying Japanese.
            </p>
            <p>
              I am friendly, engaging and kind. I am happy to help anyone - any
              age, gender, nationality, ability and sexuality.
            </p>
            <p>
              My lessons are fun, relaxed and interesting. I can tailor the
              lessons to your needs - let me know what you are interested in as
              well as what you would like to study!
            </p>
            <p>
              Please book a trial lesson! If you cannot find a suitable time in
              my availability, you can just message me and I will try to find a
              suitable time slot for you.
            </p>
          </>
        )}
      </div>
      {show && (
        <p className="text-primary text-sm cursor-pointer" onClick={() => setShow(false)}>
          Hide
        </p>
      )}
    </div>
  );
};

export default Tutor;
