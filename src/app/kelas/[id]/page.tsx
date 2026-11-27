'use client';

import { useParams } from 'next/navigation';
import { Suspense } from 'react';

function KelasContent() {
  const params = useParams<{ id: string }>();

  return (
    <div>
      <h1>Welcome to the Kelas {params.id}</h1>
      <h2>This is a subheading</h2>
    </div>
  );
}

export default function KelasPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <KelasContent />
    </Suspense>
  );
}