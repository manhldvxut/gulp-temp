<?php require(PATH.'/header.php'); ?>
<main>
	<section class="hea-top">
		<div class="bg-car">
			<img class="wow rubberBand" data-wow-delay="0.5s" src="<?php echo DOMAIN; ?>/images/top/bg-car.svg" alt="">
		</div>
		<div class="container news">
			<h1 class="big-line">login<span class="jp">ログイン</span></h1>
		</div>
		<div class="radius-type2 list-news">
			<div class="container guide-container">
				<ul class="list-icon-people">
					<li><img class="wow bounceIn" data-wow-delay="1.5s" src="<?php echo DOMAIN; ?>/images/top/pe-01.svg" alt=""></li>
					<li><img class="wow bounceIn" data-wow-delay="1.5s" src="<?php echo DOMAIN; ?>/images/top/pe-03.svg" alt=""></li>
					<li><img class="wow bounceIn" data-wow-delay="1.5s" src="<?php echo DOMAIN; ?>/images/top/pe-02.svg" alt=""></li>
				</ul>
				<div class="login-box">
					<div class="item">
						<div class="title">ログイン</div>
						<div class="form-box">
							<div class="input-box"><label for="input-1">ユーザーID / メールアドレス</label><input type="text" id="input-1"></div>
							<div class="input-box"><label for="input-2">パスワード</label><input type="password" id="input-2"></div>
							<div class="check-box">
								<div class="item checkbox">
									<input type="checkbox" name="" id="unit-11"><label for="unit-11">次回から自動的にログインする</label>
								</div>
								<div class="item link"><a href="#">パスワードをお忘れですか？</a></div>
							</div>
							<div class="btn-box">
								<div class="btn orange"><a href="#"><span>ログイン</span></a></div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="title">新規登録</div>
						<div class="form-box">
							<div class="btn-box">
								<div class="btn orange"><a href="#"><span>新規登録</span></a></div>
							</div>
						</div>
						<p>まずは簡単なフォームに入力するだけ。お仕事のご紹介はご登録後となります。ご登録いただくと、お仕事のご紹介だけではなく、転職活動のサポートを無料で受けられます。</p>
						<div class="label">ご登録の前にこちらもご確認ください。</div>
						<div class="form-box">
							<div class="btn-box">
								<div class="btn border"><a href="#"><span>ご利用の流れ</span></a></div>
							</div>
						</div>
					</div>
				</div>
				
				
			</div>
		</div> <!-- end-bg-boder-radius -->

		<ul class="nav-small">
			<li><a href="">トップページ</a></li>
			<li class="active">ログイン</li>
		</ul>
		<div class="small-car wow fadeInRight" data-wow-duration="2s"><img class="wow rubberBand" data-wow-delay="2s" src="<?php echo DOMAIN; ?>/images/top/small-car.svg"></div>
	</section>
</main>

<?php require(PATH.'/footer.php'); ?>