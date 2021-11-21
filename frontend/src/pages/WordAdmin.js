import React from 'react'
import useTitle from 'hooks/useTitle';
import WordAdminData from 'components/WordAdmin/data';

export default function WordAdminPage() {
  useTitle('Word Admin');
  return (
    <div className="container">
      <WordAdminData/>
    </div>
  )
}

