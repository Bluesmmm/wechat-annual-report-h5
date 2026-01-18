// Cloudflare Pages Function - 密码验证接口
// 这个函数在 Cloudflare 的服务器上运行，用户无法看到密码

export async function onRequest(context) {
  const { request } = context;

  try {
    // 只允许 POST 请求
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 获取用户提交的密码
    const { password } = await request.json();

    if (!password) {
      return new Response(JSON.stringify({ error: 'Password required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 从环境变量读取正确密码
    // 部署后需要在 Cloudflare 设置环境变量 CORRECT_PASSWORD
    const correctPassword = context.env.CORRECT_PASSWORD || '1314.22';

    // 验证密码
    const isValid = password === correctPassword;

    return new Response(JSON.stringify({
      success: isValid,
      message: isValid ? '验证成功' : '密码错误'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // 防止缓存
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
