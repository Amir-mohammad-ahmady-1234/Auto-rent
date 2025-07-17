import { supabase } from './supabase';

export async function incrementArticleViews(postId: string) {
  const { data, error } = await supabase
    .from('blogs')
    .select('views')
    .eq('id', postId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const newViews = (data.views || 0) + 1;

  const { error: updateError } = await supabase
    .from('blogs')
    .update({ views: newViews })
    .eq('id', postId);

  if (updateError) {
    throw new Error(updateError.message);
  }
}
