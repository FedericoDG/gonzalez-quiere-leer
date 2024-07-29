"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { ArticleData, extract } from '@extractus/article-extractor';
import Image from 'next/image';
import { useState } from 'react';

interface Article {
  article: ArticleData;
}

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const body = JSON.stringify({ url: inputValue });
      console.log(body);
      const res = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await res.json();
      setData(result);
    } catch (error) {
      setError((error as Error).message);
      setData(null);
    } finally {
      setLoading(false);
      setInputValue('');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-2 md:px-24 md:py-12 ">
      <div className="z-10 w-full max-w-5xl items-center justify-between">
        <form onSubmit={handleSubmit} className='flex w-full'>
          <Input
            type="text"
            placeholder="pegá acá el enlace del artículo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button disabled={inputValue.length === 0} className='ml-4'>Leer!</Button>
        </form>
        <div className='article'>

          {loading && <Spinner size={'large'} />}
          {error && <p className='text-center'>Error: {error}</p>}
          {data && !loading && (
            <div className=' bg-white dark:bg-gray-900 my-4 rounded shadow'>
              <div >
                <h1>{data.article.title?.split('|')[0]}</h1>
                {
                  data.article.author !== '' && (
                    <h2>({data.article.author})</h2>
                  )
                }
              </div>
              <div className='flex justify-center'>
                <Image
                  src={data.article.image!}
                  width={600}
                  height={600}
                  alt="Picture of the author"
                />
              </div>
              <div

                dangerouslySetInnerHTML={{ __html: data.article.content?.toString()! }}
              />
            </div>
          )}
        </div>
      </div>


      <footer className="">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="mailto:federicodg80@gmail.com" className="hover:underline">Federico González</a></span>
      </footer>


    </main >
  );
}
