// components/SimpleAuth.tsx（超シンプル版）
'use client';

import { useState } from 'react';

export function SimpleAuth({ children }: { children: React.ReactNode }) {
  // ローカルストレージから直接取得（useEffectを使わない）
  const [isAuthed, setIsAuthed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('simpleAuth') === 'true';
    }
    return false;
  });
  
  const [inputPass, setInputPass] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // パスワードチェック
    if (inputPass === 'mysecret123') {
      localStorage.setItem('simpleAuth', 'true');
      setIsAuthed(true);
    } else {
      alert('パスワードが違います！');
      setInputPass('');
    }
  };

  if (!isAuthed) {
    return (
      <div style={{
        padding: '50px',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <h2 style={{ marginBottom: '30px' }}>🔐 このサイトはパスワード保護されています</h2>
        <form onSubmit={handleSubmit} style={{ width: '300px' }}>
          <input
            type="password"
            value={inputPass}
            onChange={(e) => setInputPass(e.target.value)}
            placeholder="パスワードを入力"
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '15px',
              fontSize: '16px'
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            アクセスする
          </button>
        </form>
        <p style={{ marginTop: '20px', color: '#888' }}>
          パスワード: <strong>mysecret123</strong>
        </p>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => {
          localStorage.removeItem('simpleAuth');
          setIsAuthed(false);
        }}
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          padding: '8px 15px',
          background: '#ff6b6b',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        🔓 ロックする
      </button>
      {children}
    </>
  );
}